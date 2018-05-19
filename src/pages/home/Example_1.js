/*
 * @Author: Mr.B 
 * @Date: 2018-05-19 16:14:22 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-05-19 16:16:41
 */
'use strict';

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as PIXI from 'pixi.js'
import Draggable from "gsap/Draggable"

// Style
import _s from './css.styl'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    flex: {
        flex: 1,
    }
});

class Example_1 extends React.Component {
    constructor(props) {
        super(props);

        this.mc = null
    }

    componentDidMount() {
        let _me = this

        let type = "WebGL"
        if(!PIXI.utils.isWebGLSupported()){
            type = "canvas"
        }

        PIXI.utils.sayHello(type)

        //Create a Pixi Application
        let app = new PIXI.Application({
            width: 200, 
            height: 200,
            antialias: true
        });

        app.renderer.backgroundColor = 0xeeeeee;

        // movie clip
        let textureArray = [];

        for (let i = 1; i <= 20; i++){
            let sn
            if(i < 10){
                sn = '0' + i
            }else{
                sn = '' + i
            }
            let texture = PIXI.Texture.fromImage('images/kongfu_'+sn+'.png');
            textureArray.push(texture);
        };

        _me.mc = new PIXI.extras.AnimatedSprite(textureArray);

        _me.mc.onFrameChange = (e)=>{
            console.info(e)
            if(e >= 20){
                _me.mc.gotoAndStop(20)
            }
        }

        _me.mc.animationSpeed = 0.2
        _me.mc.loop = false

        app.stage.addChild(_me.mc)

        this.box.appendChild(app.view);

        // dnd
        Draggable.create('#drag_ele', {
            type: 'x,y',
            bounds: document.getElementById('drag_area'),
            onClick:function() {
                console.log("clicked");
            },
            onDragEnd:function() {
                console.log("drag ended");
            }
        });

    }

    handlePlay(){
        this.mc.gotoAndPlay(0)
    }
    
    render() {
        return (
            <section className="example-1">
                {/* <h1>Control sequence frame play</h1> */}
                <Button variant="raised" color="secondary" className={this.props.classes.button}>
                    Example 1: to control playback of sequence frame
                </Button>

                <div className={_s.center} ref={_ele=>(this.box = _ele)}></div>
                <div className={_s.center}>
                    <Button variant="raised" color="default" onClick={this.handlePlay.bind(this)}>
                        Play
                    </Button>
                </div>
                <div id="drag_area" className={_s['drag-area']}>
                    <div id="drag_ele" className={_s['drag-ele']}></div>
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(Example_1);
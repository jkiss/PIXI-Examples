/*
 * @Author: Nokey 
 * @Date: 2017-07-13 18:03:17 
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-10-24 14:42:32
 */
'use strict';

// Plugins
import * as PIXI from 'pixi.js'
import { TimelineLite } from 'gsap'
import Util from 'utils'
import _log_hire from 'nk-hire'

// Style
import '../../fonts/roboto-thin.styl'
import styles from './css.styl'

// Pages
import Page1 from './Page1'
import Page2 from './Page2'

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Loading
            loading: true
        }
        
        this.TL = null

        this._app = null
        this.fullpage_sections = null
    }

    componentDidMount() {
        _log_hire()

        let _me = this

        _me.TL = new TimelineLite()

        _me.TL
            .to('.home img', 0.5, {scale: 0.5, opacity: 0})
            .to('.home img', 0.5, {scale: 1, opacity: 1})

        /**
         * Config
         */
        _me._app = $('#app')

        /**
         * Register global eventlistener
         */
        $(window).on('GLOBAL-ACT', (e, action)=>{
            /**
             * Usage:
             * action:{
             *     type: 'TYPE',
             *     payload: {}
             * }
             */
            switch (action.type) {
                case 'SWIPE':
                    _me.setState({
                        swipe_show: action.payload.show,
                        swipe_color: action.payload.color
                    })
                    break;

                case 'START-PAGE1-ANIMATE':
                    _me.page1.initAni()
                    break;

                case 'LOADING':
                    _me.setState({
                        loading: action.payload.loading
                    })
                    break;

                case 'SET-ALLOW-SCROLL':
                    _me.setState({
                        swipe_show: action.payload.swipe_arrow_show
                    })
                    $.fn.fullpage.setAllowScrolling(action.payload.allow_scroll)
                    break;
            
                default:
                    console.warn('No implementation for this action!')
                    break;
            }
        })

        
    }
    
    render() {
        return (
            <section className={styles.home}>
                {/* Full Page */}
                <div id="fullpage">
                    {/* Story 1 */}
                    <Page1 ref={_this => this.page1 = _this} />

                    <Page2 ref={_this => this.page2 = _this} />
                </div>
            </section>
        );
    }
}

ReactDOM.render(<MyComponent /> , document.getElementById('app'));
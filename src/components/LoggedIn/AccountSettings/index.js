/**
 * Created by Алексей on 05.05.2017.
 */

import React, {Component} from 'react'
import Common from '../../common/Common'
import Left from './components/Left'
import Right from './components/Right'

const styles = {
    display: 'flex',
    flexDirection: 'row'
}

const headerHight = 110

export default class AcoountSettings extends Component {
    render(){

        return(
            <Common pageName="account_settings" styles={styles} headerHight={headerHight}>
                <Left />
                <Right/>
            </Common>
        )
    }
}
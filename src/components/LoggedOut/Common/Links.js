/**
 * Created by Алексей on 05.05.2017.
 */

import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Links extends Component {

    render(){

        const links = [];
        this.props.links.forEach( (link, iter) => {
            links.push(
                <Link
                    to={link.ref}
                    id={link.id}
                    key={iter}>

                        {link.text}
                    </Link>
            );
        })

        return(
            <section className="link_wrap">
                {links}
            </section>
        )
    }
}
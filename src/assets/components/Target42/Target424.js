import React, {Component} from 'react';

class Target424 extends Component {
    componentDidMount() {
        let divElement = document.getElementById('viz1596207345452');
        let vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width = '820px';
        vizElement.style.height = '2427px';
        let scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }

    render() {
        return (
            <div>
                <h1 className="text-primary text-center">
                    Taux brut de scolarisation dans l'enseignement préscolaire dans (a) l'enseignement préprimaire et (b) le développement de l'éducation de la petite enfance
                </h1>
                <div className='tableauPlaceholder' id='viz1596207345452' style={{ position: "relative" }}>
                    <noscript><a href='http://tcg.uis.unesco.org/'><img alt=' '
                                                                                    src='https://public.tableau.com/static/images/SD/SDG4viz_UIStemplate_indicator4_2_4_2020_02/Dashboard/1_rss.png'
                                                                                    style={{border: "none"}}/></a></noscript>
                    <object className='tableauViz' style={{display:"none"}}>
                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F'/>
                        <param name='embed_code_version' value='3'/>
                        <param name='site_root' value=''/>
                        <param name='name' value='SDG4viz_UIStemplate_indicator4_2_4_2020_02/Dashboard'/>
                        <param name='tabs' value='no'/>
                        <param name='toolbar' value='yes'/>
                        <param name='static_image'
                               value='https://public.tableau.com/static/images/SD/SDG4viz_UIStemplate_indicator4_2_4_2020_02/Dashboard/1.png'/>
                        <param name='animate_transition' value='yes'/>
                        <param name='display_static_image' value='yes'/>
                        <param name='display_spinner' value='yes'/>
                        <param name='display_overlay' value='yes'/>
                        <param name='display_count' value='yes'/>
                        <param name='filter' value='publish=yes'/>
                    </object>
                </div>
            </div>
        );
    }
}

export default Target424;


import React from 'react'
import {Link} from 'gatsby'


import Layout from '../components/layout'


const IndexPage = () => {

    return (
        <Layout>
                <h1>Hello</h1>
                <h2> Soy Sonia</h2>
                <p>Necesitas un desarrollador? <Link to= "/contact"> Contact me</Link> </p>

        </Layout>
    )
        
}

export default IndexPage
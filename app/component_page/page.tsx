import React from 'react'
import Componentcard from '../components/componentcard'


const Componentspage = () => {
    return ( 
        
        <div className="flex overflow-x-scroll snap-x snap-mandatory h-screen">
            <Componentcard
                image="https://www.azuki.com/_next/image?url=%2Fworld%2Fvertical%2Flore-sisters.jpg&w=3840&q=75"
                name="COMPONENTS"
                link="/"
            />
            <Componentcard
                image="https://www.azuki.com/_next/image?url=%2Fworld%2Fvertical%2Flore-beanz.jpg&w=3840&q=75"
                name="UI"
                link="/"
            />
            <Componentcard
                image="https://www.azuki.com/_next/image?url=%2Fworld%2Fvertical%2Flore-origins.jpg&w=3840&q=75"
                name="PREVIEW"
                link="/test_page"
            />
            <Componentcard
                image="https://www.azuki.com/_next/image?url=%2Fworld%2Fvertical%2Flore-hilumia.jpg&w=3840&q=75"
                name="DOCUMENTS"
                link="/"
            />
            <Componentcard
                image="https://www.azuki.com/_next/image?url=%2Fworld%2Fvertical%2Flore-ruins.jpg&w=3840&q=75"
                name="REPOSITORY"
                link="/"
            />
        </div>
    )
}

export default Componentspage

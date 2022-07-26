import {ContentPresentation, ContentWallBack, ContentMembre, BannerDescript} from '../elements/Presentation';
import WallPaper from '../pictures/wallpaper.jpg';
import WallPaper1 from '../pictures/wallpaper1.jpg';


const Pesentation = () => {

    return (

        <ContentPresentation>
            <ContentWallBack>
                <img src={WallPaper}></img>
                <div></div>
            </ContentWallBack>
            <ContentMembre>
                <img src={WallPaper1}></img>
                <BannerDescript>
                    Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected 
                    with his family. He spends most of his time involving his young grandson Morty in dangerous, 
                    outlandish adventures throughout space and alternate universes. Compounded with Morty's already 
                    unstable family life, these events cause Morty much distress at home and school.
                </BannerDescript>
            </ContentMembre>
        </ContentPresentation>

    )
}

export default Pesentation;
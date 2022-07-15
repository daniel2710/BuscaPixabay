import React from 'react';
import {FcLike} from "react-icons/fc";
import {BsEye} from "react-icons/bs";

const Imagen = (props) =>{

    const {previewURL,largeImageURL,likes, tags, views} = props.imagen;
    

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">

            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" width="100px" height="200px" />
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                        <p className="card-text m-0 d-flex align-items-center">{likes}&nbsp;&nbsp; <FcLike/></p>
                        <p className="card-text m-0 d-flex align-items-center">{views}&nbsp;&nbsp; <BsEye/></p>
                        <a href={largeImageURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary btn-block">Full HD</a>
                    </div>
                </div>
            </div>

        </div> 
    )
}


export default Imagen;
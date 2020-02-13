import React, { Component } from 'react'
import Helmet from 'react-helmet'
import  './reg-style/ProfileDetail.css'
export class ProfileDetail extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
       
        const imageHandler = () =>{
        
            const inpFile = document.getElementById("inpFile"); 
            const previewContainer = document.getElementById("imagePreview"); 
            const previewImage = previewContainer.querySelector(".image-preview__image"); 
            const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");
        
        
            inpFile.addEventListener("change", function() { 
            const file = this.files[0]; 
    
            if (file) {
            const reader = new FileReader(); 

            previewDefaultText.style.display = "none"; 
            previewImage.style.display = "block"; 
    
            reader.addEventListener("load", function() {
            previewImage.setAttribute("src", this.result); 
             
            }); 
    
            reader.readAsDataURL(file);
    
            }else{
                previewDefaultText.style.display=null;
                previewImage.style.display=null;
                previewImage.setAttribute("src", "");
            }
            
    
        }); 
        }
        const { values, handleChange } = this.props;

        return (
            <div>
                <Helmet>  
                 <body className="form-bg-col"></body>
                </Helmet>
                
               

                <div className="login">
                  <div className="reg-container">
                  <button onClick={this.back} className="col-form-prev"><i class="fa fa-chevron-left"></i></button>
                  <div className="profile-pic">
                      Add your Profile Picture:
                      <div className="add-picture">
                        <div className="image-preview" id="imagePreview">
	                       <div className="card-image"></div>
	                      <img alt="" className="image-preview__image"/>
		                   <span className="image-preview__default-text"></span>
	                    </div>
                        
	                     <input onChange={handleChange('ProfilePic')} defaultValue={values.ProfilePic}  onClick={imageHandler} type="file" name="inpFile" id="inpFile" accept="image/*"/>
		                <div className="label-holder">
			                <label className="image-upload"  for="inpFile">
				             <i className="material-icons">add_photo_alternate</i>
                              Choose your Photo
			                  </label>
		                </div>
                      </div>

                  </div>
                  <div className="description">
                      Describe Yourself <br/>
                      <textarea onChange={handleChange('Description')} defaultValue={values.Description} maxLength="200" placeholder="Descibe yourself the best as possible under 200 character"></textarea>
                  </div>
                  
                  <button onClick={this.continue} className="col-form-next"><i class="fa fa-chevron-right"></i></button>
                  
                 
                  </div>
                    
                </div>
                
            </div>
        )
    }
}

export default ProfileDetail

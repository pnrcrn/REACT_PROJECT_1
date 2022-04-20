import React, { Component } from 'react'

 class ImageCard extends Component {

constructor(props){
    super(props);
    this.imageRef=React.createRef();
}

componentDidMount(){
   this.imageRef.current.addEventListener('load',this.setSpans);
    
}

setSpans=()=>{
  // html ögesi resimelerin boyutlandırılması için
    console.log(this.imageRef.current.clientHeight);
}


  render() {
      const {description, urls}=this.props.image;
    return (
      <div>
          <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
          >
          </img>
      </div>
    )
  }
}

export default ImageCard;



// import React, { Component } from 'react'

//  class ImageCard extends Component {
//   render() {
//     return (
//       <div>
//           <img
//           alt={this.props.image.description}
//           src={this.props.image.urls.regular}
//           >
//           </img>
//       </div>
//     )
//   }
// }

// export default ImageCard;
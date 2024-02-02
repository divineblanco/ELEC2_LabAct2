function Albums(props){
    return(
        <div className='new_album_cont'>
              <div className='img'>
                <img src={props.albumObj.albumPhoto} alt={props.albumObj.title} width={344} height={344}></img>
              </div>
              <div className='txt'>
                <p>
                  {props.albumObj.title}
                  <span>{props.albumObj.date}</span>
                </p>
              </div>
            </div>
    );
}

export default Albums;
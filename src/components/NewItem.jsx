const NewItem = ({title,description,src,url}) => {
  return (
    
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        
      <img className="card-img-top" style={{height:"200px",width:"326px"}}  src={src} alt="No img" />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
          {description?description.slice(0,90):"No inoformation is provided"}
        </p>
        <a href={url} target="blank" className="btn btn-primary">
          Readmore
        </a>
      </div>
    </div>
  );
};

export default NewItem;

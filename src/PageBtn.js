function PageBtn(){
    return(
        <div className="page-btn-box">
            <button type="button" className="previous">
                <img src="images/previous.png" alt="previous"></img>
            </button>
            <span className="page-num">
                <strong>1</strong>
                 /    
                <em>5</em>
            </span>
            <button type="button" className="next">
                <img src="images/next.png" alt="next"></img>
            </button>
        </div>
    );
}

export default PageBtn;
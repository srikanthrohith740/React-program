import React from "react";
class Article extends React.Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            article:{
                id:"",
                title:"",
                content:""
            }
        }
    }
    onIdchange(e){
        console.log(e.target.value)
        this.setState({article:{...this.state.article,id:e.target.value}})
    }
    onContentchange(e){
        console.log(e.target.value)
        this.setState({article:{...this.state.article,content:e.target.value}})
    }
    onTitlechange(e){
        console.log(e.target.value)
        this.setState({article:{...this.state.article,title:e.target.value}})
    }
    saveData(e){
        console.log("saving Data")
        e.preventDefault();
        let article=this.state.article;
        let tempArticle=this.state.articles;
        // this.setState({articles:tempArticle,article:{...article,id:"",content:"",title:""}})    
        this.setState({articles:tempArticle,article:{...article,id:"",title:"",content:" "}})
        tempArticle.push(article)
        
    }
    render() {
        return (


            <div className="container">
                <div className="row">
                    <h1>ARTICLE FORM</h1>
                    <form onSubmit={(e)=>this.saveData(e)}>
                                <div className="mb-3 row">
                                    <label for="id" className="col-sm-2 col-form-label">ID</label>
                                    <div className="col-sm-10">
                                        <input type="text" readonly className="form-control" id="id" valule={this.state.article.id} onChange={(e)=>this.onIdchange(e)} />   
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label for="content" className="col-sm-2 col-form-label">Content</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="content"valule={this.state.article.content} onChange={(e)=>this.onContentchange(e)} />
                                    </div>
                                    
                                </div>
                                <div className="mb-3 row">
                                    <label for="title" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="title"valule={this.state.article.title} onChange={(e)=>this.onTitlechange(e)} />
                                    </div>
                                
                                    
                                </div>
                                <button className=" btn btn-primary">submit</button>

                                </form>
                                <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Content</th>
    </tr>
  </thead>
  <tbody>
    {this.state.articles.map((item)=>{
        return(
            <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
            </tr>
        )
    })}
  </tbody>
</table>
                                
                </div>
                
            </div>


        )
    }
}
export default Article;
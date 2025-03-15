import React from 'react';
// import { css } from 'glamor'

// let news_item = css({
//     padding: '20px',
//     boxSizing: 'border-box',
//     borderBottom: '1px solid grey',
//     ':hover':{
//         color:'red'
//     }
// })

// let item_back = css({
//     background:'grey'
// })


const { id } = useParams();
const [category, setCategory] = useState(null);

useEffect(() => {
    const fetchCategory = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/categories/${id}`);
            setCategory(response.data);
            console.log("Category NewsItem fetched:", response.data);
        } catch (error) {
            console.error("Error fetching category:", error);
        }
    };

    fetchCategory();
}, [id]);

const NewsItem = ({item}) =>{
    
    return(
        <div className="news_item">
            <span>News Category</span>
            <h6>{ category.name }</h6>
            <h6>{ category.description }</h6>
            <h6>{ category.news }</h6>
            <h6>{ category.news.id }</h6>
            <h6>{ category.news.title }</h6>
            <h6>{ category.news.url }</h6>
            <hr /> 
            <span>URL</span>
            <h6>{ item.id }</h6>
            <h6>{ item.title }</h6>  
            <div> 
               <a href    = {item.url}
                    target = "_blank"
                    rel    = "noopener noreferrer"
                    className = "post-content"
                >
                    {item.url}
                </a>  
            </div>
        </div>
    )
    
}


export default NewsItem
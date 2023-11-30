import style from "../css/modules/Card.module.css"

const Card = ({post}) => {

    function getTagStyle(tag) {

        switch (tag) {
            case "html":
                return 'bg-blue-500';
            case "css":
                return 'bg-red-500';
            case "js":
                return 'bg-purple-500';
            case "php":
                return 'bg-orange-500';
            default:
                return'bg-gray-500';
        }
    };
   

    return (
            <div className={style.card}>
                <img src={post.image} alt="" className="w-full h-60 object-cover"/>
                <div className={style.cardContent}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <div>
                    {post.tags.map((tag, index) => {
                        return (
                            <span key={index} className={`tag ${getTagStyle(tag)}`}>{tag}</span>
                        )})}
                    </div>
                    <button className={style.cardButton}>LEGGI DI PIÙ</button>
                </div>
            </div>
    )
}

export default Card
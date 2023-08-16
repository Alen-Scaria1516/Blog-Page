import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const url = 'http://localhost:8000/blogs';

  const {data:blogs,isLoading,error} = useFetch(url)

  return (
      <div className="home">
        { error && <div>{ error }</div>}
        { isLoading && <div>Loading...</div>}
       { blogs && <BlogList blogs={blogs} title ="All Blogs" />}
       {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title ="Mario's Blog" handleDelete= {handleDelete}/> */}
      </div>
  );
}
 
export default Home;

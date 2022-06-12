import video from "../data/video.js";
import VideoDisplay from "./VideoDisplay"
import Likes from "./Likes"
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoDisplay video={video}/>
      <Likes upvotes={video.upvotes} downvotes={video.downvotes} />
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;

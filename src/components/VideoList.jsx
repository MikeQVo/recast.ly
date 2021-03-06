import VideoListEntry from './VideoListEntry.js';


var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video) => {
      return <VideoListEntry  click={props.click} video={video} />
    }
  )}
  </div>
);

  // <div className="video-list">
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div>
  //   <div><h5><em>videoListEntry</em> view goes here</h5></div> 
  // </div>


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;





//<TODOLIST todos={['Learn],}/>
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <VideoList videos={examplevideodata}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );

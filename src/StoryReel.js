import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=603&q=80"
        profileSrc="https://d35y6w71vgvcg1.cloudfront.net/media/2020/08/vidyut-jamwal-told-the-secret-of-upper-body-strength_730X365.jpg"
        title="Prateek Singh"
      />
      <Story
        image="https://www.travelogyindia.com/images/mumbai/gateway-of-india-tipl-1.jpg"
        profileSrc="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/01/29/784089-761254-rajkummar-rao-1.jpg"
        title="RajKumar"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg/1200px-Mumbai_Aug_2018_%2843397784544%29.jpg"
        profileSrc="https://i0.wp.com/odishabytes.com/wp-content/uploads/2020/05/being-a-girl-is-not-easy-ayushmann-khurrana.jpg?fit=1280%2C720&ssl=1"
        title="Ayushmann"
      />
      <Story
        image="https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        profileSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Celena"
      />
      <Story
        image="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
        profileSrc="https://i0.wp.com/odishabytes.com/wp-content/uploads/2020/05/being-a-girl-is-not-easy-ayushmann-khurrana.jpg?fit=1280%2C720&ssl=1"
        title="Sneha"
      />
    </div>
  );
}

export default StoryReel;

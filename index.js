const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div class="bg-container">
    <h1 class="heading">Social Buttons</h1>
    <div class="button-container">
      <Button buttonText="Like" className="like-button" />
      <Button buttonText="Comment" className="comment-button" />
      <Button buttonText="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

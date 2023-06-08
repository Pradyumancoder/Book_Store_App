const Loading = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img
        className=""
        src="https://shopcart-two.vercel.app/static/media/intro.dc189402cf48fa44fecb.gif"
        alt="Loading..."
      />
      <p className="text-black mt-4">Loading, please wait...</p>
    </div>
  );
};

export default Loading;

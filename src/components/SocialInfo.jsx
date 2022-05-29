const icons = [
  "https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmX2hOUKhMHOKiZihIhvAripCqLAzUFFsNPhCZ6_mDTEtlCJH32opm5lP5Zs5g8EPbr0&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqn76VgY2SkXUlHbFcSq58nDDlID2Cvr4ww&usqp=CAU",
  "https://i.pinimg.com/originals/5c/af/0e/5caf0e96302ba07a3fcb86fcdf0f5129.jpg",
];

const SocialInfo = () => {
  return (
    <>
      <h1 className="font-bold">Follow us</h1>
      <ul className="space-y-2">
        <li>+91 9890-255-755</li>
        <li>support@raisebe.com</li>
        <li>Privacy Policy</li>
        <li>Chikhali Pune 411062</li>
      </ul>
      <h1 className="font-bold">Follow us on social media</h1>
      <div className="flex justify-between space-x-4">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={index}
            className="w-10 aspect-square rounded-full cursor-pointer hover:scale-95"
          />
        ))}
      </div>
    </>
  );
};

export default SocialInfo;

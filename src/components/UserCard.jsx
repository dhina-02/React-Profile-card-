import PropTypes from "prop-types"
function User({ userName, city, role, skills, profile, online }) {
  return (
    <div className="card-container">
      <span className={`pro ${online ? "online" : "offline"}`}>
        {online ? "Online" : "Offline"}
      </span>
      <img src={profile} className="img" alt="user" />
      <h3>{userName}</h3>
      <p>{role}</p>
      <h3>{city}</h3>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export const UserCard = () => {
  const userData = [
    {
      userName: "James Rancy",
      city: "London",
      role: "Front End Developer",
      skills: [
        "ui / ux",
        "html",
        "css",
        "javascript",
        "react js",
        "Front end",
        "mysql",
      ],
      online: false,
      profile: "images/trainer-1.jpg",
    },
    {
      userName: "Emily Smith",
      city: "New York",
      role: "UX Designer",
      skills: [
        "user research",
        "wireframing",
        "prototyping",
        "Adobe XD",
        "Sketch",
      ],
      online: true,
      profile: "images/trainer-3.jpg",
    },
    {
      userName: "Michael Johnson",
      city: "San Francisco",
      role: "Full Stack Developer",
      skills: ["Node.js", "Express", "MongoDB", "React", "Angular", "Python"],
      online: true,
      profile: "images/trainer-2.jpg",
    },
    {
      userName: "Sophia Garcia",
      city: "Los Angeles",
      role: "Digital Marketing Specialist",
      skills: ["SEO", "SEM", "social media marketing", "Google Analytics"],
      online: false,
      profile: "images/trainer-3.jpg",
    },
  ];

  return (
    <>
      {userData.map((item,index) => (
        <User key={index}
          userName={item.userName}
          city={item.city}
          role={item.role}
          skills={item.skills}
          profile={item.profile}
          online={item.online}
        />
      ))}
    </>
  );
};

User.propTypes = {
  userName: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  profile: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};
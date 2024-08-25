import React, { useState } from 'react';
import '../styles/Listitem.css'; 
import '../styles/About.css';

const ListItem = ({ title, id, description, isSelected, onClick }) => (
  <div className={`list-item ${isSelected ? 'selected' : ''}`} onClick={onClick}>
    <div className='list-header'>
      <div className='list-number'>{id}</div>
      <div className='list-title'>{title}</div>
    </div>
    {isSelected && <p>{description}</p>}
  </div>
);

const Divider = () => <div className="divider"></div>; // Divider component

const TrackerBar = ({ selectedIndex, totalItems }) => {
  const percent = selectedIndex * 33;
  return (
  <div className="tracker">
     <div className="tracker-bar" style={{top: `${percent}%`}}></div>
  </div>
  );
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const items = [
    { title: 'BACKEND DEVELOPMENT', id:'01', description: 'I specialize in building robust and scalable backend solutions using cutting-edge technologies. Design and development of RESTful APIs, Implementation of authentication and auth mechanisms (e.g., OAuth, JWT), Database modeling, and optimization (e.g., SQL, NoSQL databases).' },
    { title: 'FRONTEND DEVELOPMENT', id:'02', description: `I create engaging and responsive user interfaces that deliver seamless experiences across devices. If you're looking to enhance your web or mobile applications, I provide the following frontend development services like Development of interactive and intuitive user interfaces using HTML, CSS, and JavaScript frameworks.` },
    { title: 'CLOUD TECHNOLOGIES', id:'03', description: `I have expertise in leveraging cloud platforms to build scalable, secure, and reliable applications and services. Cloud infrastructure design and implementation using tools like Terraform, Continuous integration and deployment (CI/CD) pipelines using Jenkins, Deployment and maintenance of backend applications on cloud platforms like AWS or Google Cloud.` }
  ];

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className='list'>
      <div className="list-container">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              title={item.title}
              id={item.id}
              description={item.description}
              isSelected={index === selectedItem}
              onClick={() => handleItemClick(index)}
            />
            {index < items.length - 1 && <Divider />} 
          </React.Fragment>
        ))}
      </div>
      <TrackerBar selectedIndex={selectedItem} totalItems={3}/>
    </div>
  );
};

export default App;

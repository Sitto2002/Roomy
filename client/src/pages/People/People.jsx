import React, { useState, useEffect } from 'react';
import GetUser from '../../components/GetUser/GetUser' 
import GetLocation from '../../components/GetLocation/GetLocation';
import Select from 'react-select';
import { Slider } from '@mantine/core';
import axios from 'axios';

const People = () => {
  const [location, setLocation] = useState('');
  const [value, setValue] = useState('');
  const [gender, setGender] = useState('');
  const [distance, setDistance] = useState(50);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (location) {
      fetchPeople();
    }
  }, [location, gender, distance]);

  const fetchPeople = async () => {
    try {
      const response = await axios.get('/api/people', {
        params: {
          location,
          gender,
          distance,
        },
      });
      setPeople(response.data);
    } catch (error) {
      console.error('Error fetching people:', error);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleGenderChange = (selectedOption) => {
    setGender(selectedOption ? selectedOption.value : '');
  };

  const handleDistanceChange = (value) => {
    setDistance(value);
  };

  return (

<div className="wrapper" style={{backgroundcolor: "black"}}>
      <div className="flexColCenter paddings innerWidth properties-container ">
      <h1>Find People</h1>
      <GetLocation />

    <div style={styles.container}>
      <div style={styles.searchContainer}>
         <GetUser />
        <Select
          options={[
            { value: '', label: 'All' },
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
          onChange={handleGenderChange}
          placeholder="Select Gender"
          styles={styles.select}
        />
        <div style={styles.filterItem}>
          <div style={styles.container}>
      <h2><label>Distance (km): {value}</label></h2>
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={500}
        styles={{
          track: { backgroundColor: 'lightgreen' },
          bar: { backgroundColor: 'green' },
          thumb: { backgroundColor: 'green', borderColor: 'darkgreen' },
        }}
      />
    </div>
        </div>
      </div>

      <div style={styles.resultsContainer}>
        {people.length > 0 ? (
          people.map((person) => (
            <div key={person.id} style={styles.personCard}>
              <h3>{person.name}</h3>
              <p>{person.gender}</p>
              <p>{person.location}</p>
              <p>Distance: {person.distance} km</p>
            </div>
          ))
        ) : (
          <p>No people found for the selected filters.</p>
        )}
      </div>
    </div>

    </div>
    </div>
  );
};

const styles = {
  bg: {
    bgcolor: 'black',
  },
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  searchContainer: {
    display: 'flex',
    gap: '80px',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '7px',
    fontSize: '16px',
    flex: '1',
  },
  select: {
    flex: '4',
  },
  filterItem: {
    color: 'green',
    gap: '70px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'row',
  },
  resultsContainer: {
    marginTop: '100px',
  },
  personCard: {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
  },
};

export default People;


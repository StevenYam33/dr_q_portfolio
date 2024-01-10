import React, {useState, useEffect} from "react";
import "./GoogleForm.css";

import { ReviewCard } from "./ReviewCard";

import axios from "axios";
import ReactLoading from 'react-loading';

function GoogleForm() {
    const [data, setData] = useState([]);

    // fetch data from Google API using axios
    useEffect(() =>{
        const fetchData = async ()=> {
            const apiKey = "AIzaSyCW1IunBPEy_HL7nmtW-1LA_NSPSPQEUYg";
            const sheetId = "1aK0WAlG1YmKFsISJkUygo5HcdbaVKbIJPvxSNF89gsA";
            const range = "Form responses 2";
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
        
            try {
                const response = await axios.get(url);
                setData(response.data.values);
            } catch (error) {
                console.error("Error fetching Google Sheet data:", error)
            }
        };
        fetchData();
    },[]);

    // transform data into json format
    const transformDataToJSON = () => {
        if (data.length === 0) {
            return [];
        }
    
        const titles = data[0];
        const transformedData = data.slice(1).map((row) => {
          const dataObj = {};
          titles.forEach((title, index) => {
            dataObj[title] = row[index];
          });
          return dataObj;
        });
        
        return transformedData;
      };

      return (
        <div className="review-card-list">
            {Array.isArray(data) && data.length > 0 ? (
                <ReviewCard items={transformDataToJSON()} />                
            ) : (
                <ReactLoading type={'spokes'} color={'var(--red)'} height={'50px'} width={'50px'} />
            )}
        </div>
      );
    }

    
export default GoogleForm;

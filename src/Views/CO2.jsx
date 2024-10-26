import DataPage from "Components/core/DataPage";
import Endpoints from "Resources/Endpoints"

const url = `${Endpoints.BASE}${Endpoints.MAIN.CO2.URL}`;

const co2Mapper = (data) => {
  return data.map(item => ({
    year: item.year,    
    month: item.month,  
    day: item.day,      
    cycle: item.cycle,  
    trend: item.trend   
  }));
};

const CO2Page = () => {
  const columns = [
    { header: 'Year', accessor: 'year' },
    { header: 'Month', accessor: 'month' },
    { header: 'Day', accessor: 'day' },
    { header: 'Cycle', accessor: 'cycle' },
    { header: 'Trend', accessor: 'trend' },
  ];

  return (
    <DataPage 
      title="CO2 Data" 
      apiUrl={url}
      columns={columns} 
      dataLabel="CO2 Levels" 
      dataMapper={co2Mapper}
    />
  );
};

export default CO2Page;

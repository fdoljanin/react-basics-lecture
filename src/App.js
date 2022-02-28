import { useState } from 'react';

import AddInternForm from './components/AddInternForm';
import InternList from './components/InternList';

const App = () => {
  const [internList, setInternList] = useState([]);

  const handleAddIntern = (intern) => {
    setInternList(prev => ([...prev, intern]));
  }

  return <div>
    <AddInternForm addIntern={handleAddIntern} />
    <InternList internList={internList} />
  </div>
}

export default App;

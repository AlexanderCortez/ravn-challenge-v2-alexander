import enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new EnzymeAdapter() });

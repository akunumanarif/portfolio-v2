// import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

//import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import works from './works';
import testimonials from './testimonials';
import brands from './brands';
import abouts from './abouts';
import experiences from './experiences';
import skills from './skills';
import workExperience from './workExperience';
import contact from './contact';

export default createSchema({
	// Schema Names
	name: 'default',

	types: schemaTypes.concat([ works, testimonials, brands, abouts, skills, workExperience, experiences, contact ])
});

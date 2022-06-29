import React, { useEffect } from 'react';

const Home: React.FC = () => {
	useEffect(() => console.log("Home"), []);

	return (
		<>Accueil</>
	)
}

export default Home;
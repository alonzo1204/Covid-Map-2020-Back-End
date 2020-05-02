'use stricts'
// start with mocha
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
const assert = require('chai').assert;
chai.use(chaiHttp);
const url= 'http://localhost:8080/api/test';
const tools = require("../tools")

///////////GET
describe('Get all countries: ',()=>{
	it('should get all countries', (done) => {
		chai.request(url)
            .get('/dataCountries')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

////////GET BY ID
describe('Get country by Id: ',()=>{
	it('should get a country by its Id', (done) => {
		chai.request(url)
            .get('/dataCountries/2')
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

//////POST -------ESTÁ COMENTADO PORQUE TRATA DE INSERTAR UN PAIS CADA VEZ QUE CORREN LOS TESTS
describe('Insert a country: ',()=>{
	it('should insert a country', (done) => {
		chai.request(url)
            .post('/dataCountries')
            .send({
                id: 913, 
                codeCountry: 'EC',
                country: 'Test Country',
                continent: 'Test Continent',
                cases: 1111,
                todayCases: 111,
                deaths: 0,
                todayDeaths: 0,
                recovered: 9999,
                active: 222,
                critical: 1111,
                casesPerOneMillion: 16,
                deathsPerOneMillion: 0,
                totalTests: 99999,
                testsPerOneMillion: 222,
                latitude: '19',
                longitude: '-97'})
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});


/////// PUT
describe('Update the cases of a country: ',()=>{
	it('should update the case the country with the Id 213', (done) => {
		chai.request(url)
            .put('/dataCountries/913')
            .send({
                    id: 913, 
                    codeCountry: 'EC',
                    country: 'Test Country',
                    continent: 'Test Continent',
                    cases: 0,
                    todayCases: 111,
                    deaths: 0,
                    todayDeaths: 0,
                    recovered: 9999,
                    active: 222,
                    critical: 1111,
                    casesPerOneMillion: 16,
                    deathsPerOneMillion: 0,
                    totalTests: 99999,
                    testsPerOneMillion: 222,
                    latitude: '19',
                    longitude: '-97'})
			.end( function(err,res){
                console.log(res.body)
               // expect(res.body).to.have.property('cases').to.be.equal(0);
				expect(res).to.have.status(200);
				done();
			});
    });
});

///////DELETE
describe('Delete country by Id: ',()=>{
	it('should delete a country by its Id', (done) => {
		chai.request(url)
            .delete('/dataCountries/913')
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

///////GET FORMAT MAP FOR DATA COUNTRIES
describe('Get the map format all countries: ',()=>{
	it('should get map format of every country registered', (done) => {
		chai.request(url)
            .get('/getDataCountriesFormatMap')
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

///// GET TREE GRID FOR DATA COUNTRIES
describe('Get Tree Grid of dataCountries: ',()=>{
	it('should get the Tree Grid of all countries registered', (done) => {
		chai.request(url)
            .get('/getDataCountriesTreeGrid')
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});

// //////  TRUNCATE ----- DELETES ALL DATACOUNTRIES
// // describe('Truncate countries: ',()=>{
// // 	it('should delete every country', (done) => {
// // 		chai.request(url)
// //             .delete('/dataCountries')
// // 			.end( function(err,res){
// //                 console.log(res.body)
// // 				expect(res).to.have.status(200);
// // 				done();
// // 			});
// //     });
// // });

describe('get country by Id: ',()=>{
	it('should get a country by Id', (done) => {
		chai.request(url)
            .get('/dataCountries/913')
			.end( function(err,res){
                console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
    });
});



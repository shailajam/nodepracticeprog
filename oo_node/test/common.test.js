let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing my API',() => {
    it('should be return status 200 for default',(done) =>{
        chai.request('http://localhost:3000')
        .get('/')
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
    it('should be return status 200 for default',(done) =>{
        chai.request('http://localhost:3000')
        .get('/getProduct')
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
    it('should be return status 404 for default',(done) =>{
        chai.request('http://localhost:3000')
        .get('/getProducts')
        .then((res) => {
            expect(res).to.have.status(404);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
    it('should be return status 201 for default',(done) =>{
        chai.request('http://localhost:3000')
        .post('/postProduct')
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
})
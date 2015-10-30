var superagent = require('superagent')
var expect = require('expect.js')

describe('express rest api server', function(){
  var id

  it('post object', function(done){
    superagent.post('http://localhost:8080/api/calevents')
      .send({ calevent_name: 'Christmas'
        , calevent_location: 'London'
      })
      .end(function(e,res){
        console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body.length).to.eql(1)
        expect(res.body[0]._id.length).to.eql(24)
        id = res.body[0]._id
        done()
      })    
  })

  it('retrieves an object', function(done){
    superagent.get('http://localhost:8080/api/calevents/'+id)
      .end(function(e, res){
        console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id.length).to.eql(24)        
        expect(res.body._id).to.eql(id)        
        done()
      })
  })

  it('retrieves a collection', function(done){
    superagent.get('http://localhost:8080/api/calevents')
      .end(function(e, res){
        console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body.length).to.be.above(0)
        expect(res.body.map(function (item){return item._id})).to.contain(id)        
        done()
      })
  })




  it('updates an object', function(done){
    superagent.put('http://localhost:8080/api/calevents/'+id)
      .send({calevent_name: 'Christmas Holidays'
        , calevent_location: 'New York'})
      .end(function(e, res){
        console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.msg).to.eql('success')        
        done()
      })
  })
  it('checks an updated object', function(done){
    superagent.get('http://localhost:8080/api/calevents/'+id)
      .end(function(e, res){
        console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id.length).to.eql(24)        
        expect(res.body._id).to.eql(id)        
        expect(res.body.calevent_name).to.eql('Christmas Holidays')        
        done()
      })
  })    
  
  it('removes an object', function(done){
    superagent.del('http://localhost:8080/api/calevents/'+id)
      .end(function(e, res){
        console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.msg).to.eql('success')    
        done()
      })
  })      
})

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});





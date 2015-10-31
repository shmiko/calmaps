var superagent = require('superagent')
var expect = require('expect.js')



describe('express rest api server testing', function(){
  console.log("")
  console.log("*************************")
  console.log("API TESTS STARTING")
  console.log("*************************")   
  var id
  var coll = 'calevents';
  var std_console_output = coll + ". id is " + id + " response was ";
  
  it('post to ' + coll, function(done){
    superagent.post('http://localhost:8080/collections/' + coll)
      .send({ calevent_name: 'Christmas'
        , calevent_location: 'London'
      })
      .end(function(e,res){
        console.log('post to ',std_console_output,res.body)
        expect(e).to.eql(null)
        expect(res.body.length).to.eql(1)
        expect(res.body[0]._id.length).to.eql(24)
        id = res.body[0]._id
        done()
        console.log('post to ' + coll,' completed!')
        console.log("*************************")
        console.log("")
      })    
  })
  

  it('gets a ' + coll, function(done){
    superagent.get('http://localhost:8080/collections/' + coll + '/' + id)
      .end(function(e, res){
        console.log('gets a ',std_console_output,res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id.length).to.eql(24)        
        expect(res.body._id).to.eql(id)        
        done()
        console.log('gets a ' + coll,' completed!')
        console.log("*************************")
        console.log("")
      })
  })
  
  it('retrieves all ' + coll, function(done){
    superagent.get('http://localhost:8080/collections/' + coll)
      .end(function(e, res){
        console.log('retrieves all ',std_console_output,res.body)
        expect(e).to.eql(null)
        expect(res.body.length).to.be.above(0)
        expect(res.body.map(function (item){return item._id})).to.contain(id)        
        done()
        console.log('gets all ' + coll,' completed!')
        console.log("*************************")
        console.log("")
      })
  })
  
  it('updates a ' + coll, function(done){
    superagent.put('http://localhost:8080/collections/' + coll + '/' + id)
      .send({calevent_name: 'Christmas Holidays'
        , calevent_location: 'New York'})
      .end(function(e, res){
        console.log('updates a ',std_console_output,res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.msg).to.eql('success')        
        done()
        console.log('updates a ' + coll,' completed!')
        console.log("*************************")
        console.log("")
      })
  })
  
  it('checks an updated ' + coll, function(done){
    superagent.get('http://localhost:8080/collections/' + coll + '/' + id)
      .end(function(e, res){
        console.log('checks an updated ',std_console_output,res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id.length).to.eql(24)        
        expect(res.body._id).to.eql(id)        
        expect(res.body.calevent_name).to.eql('Christmas Holidays')        
        done()
        console.log('checks an updated ' + coll,' completed!')
        console.log("*************************")
        console.log("")
      })
  })    
  
  it('removes a ' + coll, function(done){
    superagent.del('http://localhost:8080/collections/' + coll + '/' + id)
      .end(function(e, res){
        console.log('removes a ',std_console_output,res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.msg).to.eql('success')    
        done()
        console.log('removes a ' + coll,' completed!')
        console.log("")
        console.log("*************************")
        console.log("   API TESTS COMPLETED   ")
        console.log("*************************")  
        console.log("")
        console.log("*************************")
        console.log("  GENERIC TESTS STARTING ")
        console.log("*************************")  
        console.log("")
      })
  }) 
    
})




var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      console.log("")
      console.log("*************************")
      console.log(" GENERIC TESTS COMPLETED ")
      console.log("*************************")
    })
    
  })
  
});





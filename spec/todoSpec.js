describe('Todo', function (){

  var todo;

  beforeEach(function(){
    todo = new Todo();
  })

  it('adds an item', function (){
  //   item = {
  //     title: "buy bread",
  //     complete: false
  //   }
    expect(todo.add('get milk')).toEqual('get milk')
  });
});
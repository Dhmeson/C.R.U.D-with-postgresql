import { User } from "../User";
test('test',()=>{
    var u=new User
    var b=u.test()
    expect(b).toEqual("1")
})
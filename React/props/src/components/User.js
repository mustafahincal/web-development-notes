import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends, address }) {
   //* App.js 'den gelen veriler yani props, function User(props) dersem o veriler props objesi içinde olur ve kullanırken props.name diyerek kullanmam gerekir.
   //* Ancak ben props'un object olduğunu biliyorum yukardaki gibi yaparsam props.name diye kullanmak zorunda kalmam
   //* function User({name, surname, isLoggedIn}){}   gelen verileri hangi isimle gönderdiysem onunla alıyorum.

   if (!isLoggedIn) {
      return (
         <>
            <h1>Giriş Yapmadınız</h1>
         </>
      );
   }

   return (
      <>
         <h1>{`${name} ${surname} ve yaşım ${age}`}</h1>
         {address.title} {address.zip}
         <br></br>
         <br></br>
         {/* {friends.map((friend) => {
            return <div>{friend}</div>;
         })} */}
         {/* {friends.map((friend, index) => (
            <div key={index}>
               {index} - {friend}
            </div>
         ))} */}
         {friends &&
            friends.map((friend) => (
               <div key={friend.id}>
                  {friend.id} - {friend.name}
               </div>
            ))}
      </>
      //* map ile listeleme işlemini yaparken döngüler içerisinde return ettiğimiz ifadelerin performans kaybı yaşamadan listelenmesi için react bizden bir key prop'u istiyor ve bunların benzersiz olması gerekiyor. bi json verileri içerisindeki id'lerde olabilir veya yukardaki örnekteki gibi map ile dolaşırken her elemanın bir index'i olur onu da direkt tanımlayabiliriz key olarak.
   );
}
//* bu propsları ilerde bizden başka birileri de kullanabilir o yüzden işleri biraz daha düzenliyoruz, gönderilen propların type'larını belirliyoruz. name alanına number bir şey gönderirsem hata alırım.
//* gönderilmesini zorunlu  tutmak istediğim prop'a .isRequired ekliyorum
//* oneOfType ile birden fazla veri tipi olarak kabul edebiliriz.
//* bir object'in içindeki değişkenlerin veri tipini belirlerken shape kullanıyoruz.

User.propTypes = {
   name: PropTypes.string.isRequired,
   surname: PropTypes.string.isRequired,
   isLoggedIn: PropTypes.bool.isRequired,
   age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
   friends: PropTypes.array,
   address: PropTypes.shape({
      title: PropTypes.string,
      zip: PropTypes.number,
   }),
};

//* herhangi bir tanım yapılmamış bir propa default bir değer verebiliyoruz.

User.defaultProps = {
   name: "İsimsiz",
   isLoggedIn: false,
};

export default User;

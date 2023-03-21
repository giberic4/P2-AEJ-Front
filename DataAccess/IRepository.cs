using Models;

namespace DataAccess;
public interface IRepository{
        List<User> GetAllUsers();
        List<Item> GetAllItems();
        User AddUser(User user);
        int UserLogin(User user);
}
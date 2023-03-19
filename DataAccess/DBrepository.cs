using Models;
using System.Data.SqlClient;

namespace DataAccess;
public class DBRepository : IRepository
{
    private readonly string _connectionString;
    public DBRepository(string connectionString) {
        _connectionString = connectionString;
    }

    public User AddUser(User user)
    {
        try{
            using SqlConnection connect = new SqlConnection(_connectionString);
            connect.Open();


            using SqlCommand command = new SqlCommand("INSERT INTO Users(first_name, last_name, username, password, wallet) OUTPUT INSERTED.id VALUES (@fName, @lName, @uName, @uPwd, @uWallet)", connect);
            command.Parameters.AddWithValue("@fName", user.FirstName);
            command.Parameters.AddWithValue("@lName", user.LastName);
            command.Parameters.AddWithValue("@uName", user.Username);
            command.Parameters.AddWithValue("@uPwd", user.Password);
            command.Parameters.AddWithValue("@uWallet", user.Wallet);
            
            int createdId = (int) command.ExecuteScalar();
            user.Id = createdId;

            return user;
        }
        catch(SqlException ex) {
            // Log.Warning("Error! Couldn't add user because {0}", ex);
            throw;
        }
    }

    public List<Item> GetAllItems()
    {
        throw new NotImplementedException();
    }

    public List<User> GetAllUsers()
    {
        throw new NotImplementedException();
    }

    public int UserLogin(User user) {
        using SqlConnection connection = new SqlConnection(_connectionString); 
        
        string uname = user.Username!;
        string pass = user.Password!;

        Console.WriteLine("passing in user to login: \n" + user);

        connection.Open();

        using SqlCommand cmd = new SqlCommand("select id from users where username = @u and password = @p;", connection);
        cmd.Parameters.AddWithValue("@u", uname);
        cmd.Parameters.AddWithValue("@p", pass);

        Console.WriteLine("execute scalar");
        int returnedID = (int) cmd.ExecuteScalar();
        return returnedID;

    }
}

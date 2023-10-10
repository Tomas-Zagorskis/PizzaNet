using pizzareact.Data.Base;

namespace pizzareact.Models
{
    public class Order : IEntityBase
    {
        public int Id { get; set; }
        public List<CartItem> CartItems { get; set; } = new List<CartItem>();
        public double TotalPrice { get; set; }
    }
}

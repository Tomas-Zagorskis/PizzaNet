using pizzareact.Data.Base;
using System.ComponentModel.DataAnnotations;

namespace pizzareact.Models
{
    public class Order : IEntityBase
    {
        [Key]
        public int Id { get; set; }
        public List<CartItem> CartItems { get; set; } = new List<CartItem>();
        public double TotalPrice { get; set; }
    }
}

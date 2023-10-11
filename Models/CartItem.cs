using pizzareact.Data.Base;
using System.ComponentModel.DataAnnotations;

namespace pizzareact.Models
{
    public class CartItem : IEntityBase {
        [Key]
        public int Id { get; set; }
        public int OrderId { get; set; }
        public Order? Order { get; set; }
        public int PizzaId { get; set; }
        public int SizeId { get; set; }
        public List<Topping> Toppings { get; set; } = new List<Topping>();
    }
}

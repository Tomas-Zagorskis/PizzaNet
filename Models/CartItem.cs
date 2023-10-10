using pizzareact.Data.Base;

namespace pizzareact.Models
{
    public class CartItem : IEntityBase
    {
        public int Id { get; set; }
        public int PizzaId { get; set; }
        public int SizeId { get; set; }
        public List<int>? ToppingIds { get; set; }
    }
}

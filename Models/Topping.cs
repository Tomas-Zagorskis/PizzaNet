using pizzareact.Data.Enums;
using System.ComponentModel.DataAnnotations;

namespace pizzareact.Models {
    public class Topping {
        [Key]
        public int Id { get; set; }
        public PizzaTopping PizzaTopping { get; set; }
        public int AmountInGram { get; set; }
    }
}

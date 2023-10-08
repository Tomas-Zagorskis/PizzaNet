using pizzareact.Data.Base;
using pizzareact.Data.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pizzareact.Models {
    public class Topping : IEntityBase {
        [Key]
        public int Id { get; set; }

        [Column("PizzaTopping")]
        public string PizzaToppingString {
            get { return PizzaTopping.ToString(); }
            private set {
                PizzaTopping = (PizzaTopping)Enum.Parse(typeof(PizzaTopping), value, true);
            }
        }

        [NotMapped]
        public PizzaTopping PizzaTopping { get; set; }

        public int AmountInGrams { get; set; }
    }
}

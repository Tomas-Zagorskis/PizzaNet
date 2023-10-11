using pizzareact.Data.Base;
using pizzareact.Data.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pizzareact.Models {
    public class Size : IEntityBase {
        [Key]
        public int Id { get; set; }

        [Column("PizzaSize")]
        public string PizzaSizeString {
            get { return PizzaSize.ToString(); }
            private set {
                PizzaSize = (PizzaSize)Enum.Parse(typeof(PizzaSize), value, true);
            }
        }

        [NotMapped]
        public PizzaSize PizzaSize { get; set; }

        public int SizeInCm { get; set; }
        public int Price { get; set; }
    }
}

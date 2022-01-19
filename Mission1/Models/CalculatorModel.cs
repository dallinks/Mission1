using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission1.Models
{
    public class CalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Please enter a value between 1 and 100")]
        public int assignment { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a value between 1 and 100")]
        public int groupprojects { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a value between 1 and 100")]
        public int quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a value between 1 and 100")]
        public int exams { get; set; }
        [Range(0, 100, ErrorMessage = "Please enter a value between 1 and 100")]
        public int INTEX { get; set; }
    }
};

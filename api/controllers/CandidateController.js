/**
 * CandidateController
 *
 * @description :: Server-side logic for managing candidates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    createOrUpdate: function(req, res) {
        Candidate.Create(req.body)
            .exec(function(err, result) {
                console.log(result);
            })

    }
};
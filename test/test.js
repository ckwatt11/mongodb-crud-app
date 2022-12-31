const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const blog = require("../models/Blog");
var expect = require("chai").expect; 

chai.use(chaiHttp);

chai.config.truncateThreshold = 0;

describe("Blogs", () => {
    beforeEach((done) => {
      blog.deleteMany({}, (err) => {
        done();
      });
    });
    describe("/GET blog", () => {
      it("it should GET all the blogs", (done) => {
        chai
          .request(app)
          .get("/api/blogs")
          .end((err, result) => {
            expect(result).to.have.status(200);
            expect(result.body.data).to.be.a("array");
            expect(result.body.data.length).to.equal(0);
            done();
          });
      });
    });
    describe("/POST blog", () => {
      it("should POST a new blog", (done) => {
        let blog = {
          title: "This is the first blog",
          body: "First blog post",
          image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        };
        chai
          .request(app)
          .post("/api/blogs")
          .send(blog)
          .end((err, result) => {
            expect(result).to.have.status(200);
            expect(result.body.data).to.be.a("object");
            expect(result.body.data.length).to.equal("success");
            done();
          });
      });
    });
    describe("/GET/:id blog", () => {
      it("Should fetch (GET) a blog, given its ID", (done) => {
        let blog = new blog({
          title: "This is the first blog",
          body: "This is a blog post",
          image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        });
        blog.save((err, blog) => {
          chai
            .request(app)
            .get("/api/blogs/" + blog.id)
            .send(blog)
            .end((err, result) => {
              expect(result).to.have.status(200);
              expect(result.body.data).to.be.a("object");
              expect(result.body.status).to.equal("success");
              done();
            });
        });
      });
    });
    describe("/PUT/:id blog", () => {
      it("it should UPDATE a blog given the id", (done) => {
        let blog = new Blog({
          title: "This is the first blog",
          body: "This is a blog post",
          image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        });
        blog.save((err, blog) => {
          console.log(blog.id);
          chai
            .request(app)
            .put("/api/blogs/" + blog.id)
            .send({
              title: "The first blog was updated",
              body: "This is a blog post",
              image:
                "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            })
            .end((err, result) => {
              expect(result).to.have.status(200);
              expect(result.body.data).to.be.a("object");
              expect(result.body.status).to.equal("success");
              done();
            });
        });
      });
    });
    describe("/DELETE/:id blog", () => {
      it("it should DELETE a blog given the id", (done) => {
        let blog = new Blog({
          title: "This is the first blog",
          body: "This is a blog post",
          image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        });
        blog.save((err, blog) => {
          chai
            .request(app)
            .delete("/api/blogs/" + blog.id)
            .end((err, result) => {
              expect(result).to.have.status(200);
              expect(result.body.data).to.be.a("object");
              expect(result.body.status).to.equal("success");
              done();
            });
        });
      });
    });
  });
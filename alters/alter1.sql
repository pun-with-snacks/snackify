CREATE TABLE "User" (
	"gitHandle" TEXT NOT NULL UNIQUE,
	"gitAvatar" bytea NOT NULL,
	"votesRemaining" integer NOT NULL UNIQUE,
	CONSTRAINT User_pk PRIMARY KEY ("gitHandle")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "FoodItem" (
	"_id" serial NOT NULL,
	"foodName" TEXT NOT NULL,
	" imgUrl" TEXT NOT NULL,
	"price" FLOAT NOT NULL,
	"itemVotes" integer NOT NULL,
	"inCart" BOOLEAN NOT NULL,
	CONSTRAINT FoodItem_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "userToItem" (
	"foodItemId" integer NOT NULL,
	"firstVoterGitHandle" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Admin" (
	"gitHandle" serial NOT NULL,
	"budget" FLOAT NOT NULL,
	"userVotes" integer NOT NULL,
	"startTime" integer NOT NULL,
	"endTime" integer NOT NULL,
	CONSTRAINT Admin_pk PRIMARY KEY ("gitHandle")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "userToItem" ADD CONSTRAINT "userToItem_fk0" FOREIGN KEY ("foodItemId") REFERENCES "FoodItem"("_id");
ALTER TABLE "userToItem" ADD CONSTRAINT "userToItem_fk1" FOREIGN KEY ("firstVoterGitHandle") REFERENCES "User"("gitHandle");

ALTER TABLE "Admin" ADD CONSTRAINT "Admin_fk0" FOREIGN KEY ("gitHandle") REFERENCES "User"("gitHandle");

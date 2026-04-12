from uuid import uuid4

def generate_random_uuid() -> str:
	return str(uuid4())


if __name__ == "__main__":
	for _ in range(5):
		print(generate_random_uuid())
